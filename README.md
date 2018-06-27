# AWS Express Serverless

## Requirements

``` bash
npm i serverless -g
npm i
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
./awscli-bundle/install -b ~/bin/aws
echo $PATH | grep ~/bin
export PATH=~/bin:$PATH
```

To ensure that your $PATH settings are retained between sessions, add the export line to your shell profile (~/.profile, ~/.bash_profile, etc).