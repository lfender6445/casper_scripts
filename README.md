# install

- install latest jdk
- set `JAVA_HOME`
	 - `echo $JAVA_HOME` => `/Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home`
- build browser-mob-proxy from source via `tag browsermob-proxy-2.0.0`
- start proxy
  - ./target/browsermob-proxy-2.0.0/bin/browsermob-proxy

# deps
  - [browsermob-proxy svc](https://github.com/lightbody/browsermob-proxy/)
	- [casper](http://casperjs.org/)

# debugging
- start app
  - node app.js
  - http_proxy=http://127.0.0.1:8081 node --debug app.js
- start debugger
  - node-inspector --web-port=8083
- set breakpoints


