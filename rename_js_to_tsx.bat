@echo off
for /r %%f in (*.js) do (
    if not "%%~pf" == "%CD%\node_modules\" (
        if not "%%~dpf" == "%CD%\node_modules\" (
            ren "%%f" "%%~nf.tsx"
        )
    )
)
