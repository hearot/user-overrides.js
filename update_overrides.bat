@ECHO off
SET "url=https://raw.githubusercontent.com/hearot/user.js/master/user-overrides.js"
SET "outputFile=user-overrides.js"

ECHO -----------------------------------------------------------------
ECHO Downloading %outputFile% from GitHub...
ECHO -----------------------------------------------------------------

:: Using PowerShell's Invoke-WebRequest for reliable downloading.
:: The -OutFile flag saves the content directly to the specified filename.
POWERSHELL -NoProfile -Command "Invoke-WebRequest -Uri '%url%' -OutFile '%outputFile%'"

IF EXIST "%outputFile%" (
ECHO.
ECHO Success! File saved as: %outputFile%
) ELSE (
ECHO.
ECHO ERROR: Download failed.
)
PAUSE