# AWS Express Serverless

## Requirements

node v8
AWS acount credentials [aws free](https://aws.amazon.com/free/#AWS_FREE_TIER)
serverless config credentials --provider aws --key {AWS KEY} --secret {AWS SECRET}

### Set up

``` bash
npm i serverless -g

curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
./awscli-bundle/install -b ~/bin/aws
echo $PATH | grep ~/bin
export PATH=~/bin:$PATH

npm i
```

To ensure that your $PATH settings are retained between sessions, add the export line to your shell profile (~/.profile, ~/.bash_profile, etc).
[quick tips for faster serverless development](https://serverless.com/blog/quick-tips-for-faster-serverless-development/)