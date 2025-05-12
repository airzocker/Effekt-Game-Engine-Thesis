#!/bin/bash
cd ./thesis/
pdflatex -output-directory=./out/ ./Bachelor_english.tex
if [ "$1" = "open" ]; then
  okular ./out/Bachelor_english.pdf
fi
