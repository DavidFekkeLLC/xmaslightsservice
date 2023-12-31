#!/bin/bash
pm2 stop xmaslights
pm2 delete xmaslights
pm2 save
rm -rf ~/apps/xmaslights
mkdir ~/apps/xmaslights
cp -r ~/actions-runner/projects/xmaslightsservice/xmaslightsservice/* ~/apps/xmaslights
cp ~/.env ~/apps/xmaslights/
cd ~/apps/xmaslights
pm2 start ecosystem.config.cjs
pm2 save