#!/bin/bash
pm2 stop xmaslights
pm2 delete xmaslight
pm2 save
rm -rf ~/apps/xmaslights
mkdir ~/apps/xmaslights
cp -r ~/actions-runner/projects/xmaslightsservice/xmaslightsservice/* ~/apps/xmaslights
cd ~/apps/xmaslights
pm2 start index.js --name xmaslights
pm2 save