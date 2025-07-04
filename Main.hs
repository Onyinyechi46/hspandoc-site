import System.Process (callCommand)
import System.Directory (doesFileExist, makeAbsolute)

main :: IO ()
main = do
    let inputFile = "README.md"
    let outputFile = "output.html"
    let templateFile = "template.html"

    -- Check if README.md exists
    fileExists <- doesFileExist inputFile
    if fileExists
        then do
            putStrLn $ "Converting " ++ inputFile ++ " to HTML..."

            let cmd = "pandoc " ++ inputFile ++ " --template=template.html -o " ++ outputFile

            callCommand cmd

            absPath <- makeAbsolute outputFile
            putStrLn $ "[OK] Done! Output saved to: " ++ absPath
            callCommand $ "start \"\" \"" ++ absPath ++ "\""
        else
            putStrLn $ "[ERROR] File " ++ inputFile ++ " not found."
