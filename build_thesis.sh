#!/bin/bash
cd ./thesis/
if [ "$1" = "open" ]; then
  pdflatex -output-directory=./out/ ./Bachelor_english.tex && okular ./out/Bachelor_english.pdf
else
  pdflatex -output-directory=./out/ ./Bachelor_english.tex
fi
