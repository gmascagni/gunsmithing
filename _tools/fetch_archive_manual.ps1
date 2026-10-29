<#
.SYNOPSIS
    Gunsmith Archive Manual Downloader
.DESCRIPTION
    Searches and downloads firearms manuals directly from the Internet Archive (archive.org).
.EXAMPLE
    .\fetch_archive_manual.ps1 -Search "Winchester 94"
    .\fetch_archive_manual.ps1 -Identifier "gunmanual_Savage_Lewis_Machinegun" -OutputDir "..\Lewis_Automatic_Machine_Gun\manuals"
#>

param(
    [string]$Search,
    [string]$Identifier,
    [string]$OutputDir = ".\manuals",
    [switch]$ListOnly
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

if ($Search) {
    Write-Host "[*] Searching Internet Archive for: '$Search'..." -ForegroundColor Cyan
    $encodedSearch = [System.Uri]::EscapeDataString($Search)
    $queryUrl = "https://archive.org/advancedsearch.php?q=($encodedSearch)+AND+mediatype:texts&fl[]=identifier,title,year,creator&rows=25&output=json"
    $response = Invoke-RestMethod -Uri $queryUrl
    
    $docs = $response.response.docs
    if ($docs.Count -eq 0) {
        Write-Warning "No manuals found for query '$Search'."
        return
    }
    
    Write-Host "Found $($docs.Count) matching items:" -ForegroundColor Green
    $docs | Select-Object identifier, year, title | Format-Table -AutoSize
    return
}

if ($Identifier) {
    Write-Host "[*] Fetching metadata for ID: '$Identifier'..." -ForegroundColor Cyan
    $metaUrl = "https://archive.org/metadata/$Identifier"
    $metadata = Invoke-RestMethod -Uri $metaUrl
    
    $pdfFiles = $metadata.files | Where-Object { $_.name -like "*.pdf" }
    if ($pdfFiles.Count -eq 0) {
        Write-Warning "No PDF files found in item '$Identifier'."
        return
    }
    
    Write-Host "Item Title: $($metadata.metadata.title)" -ForegroundColor Green
    Write-Host "Available PDFs:"
    $pdfFiles | Select-Object name, @{Name="SizeMB"; Expression={[math]::Round($_.size / 1MB, 2)}} | Format-Table -AutoSize
    
    if ($ListOnly) { return }
    
    foreach ($pdf in $pdfFiles) {
        $encodedName = [System.Uri]::EscapeDataString($pdf.name)
        $downloadUrl = "https://archive.org/download/$Identifier/$encodedName"
        $destPath = Join-Path $OutputDir $pdf.name
        
        Write-Host "[*] Downloading '$($pdf.name)' to '$destPath'..." -ForegroundColor Yellow
        curl.exe -L -o "$destPath" "$downloadUrl" --progress-bar
        Write-Host "[+] Download complete: $destPath" -ForegroundColor Green
    }
}
