JavaScript Mutation Testing Example
===========
#__Update__: Since the development on grunt-mutation-testing has [moved to Stryker](https://www.npmjs.com/package/grunt-mutation-testing), I've rewritten this post using the new Stryker framework. Please checkout the updated [post](http://shinglyu.github.io/testing/2016/10/11/Mutation_Testing_in_JavaScript_Using_Stryker.html). And find the new code example [here](https://github.com/shinglyu/JS-mutation-testing-example-stryker).
<hr>

* Slide show version: [link](https://shinglyu.github.io/my_presentations/QA_Sharing_Session_3_Mutation_Testing_Workshop.html)
* Code example: [github link](https://github.com/shinglyu/JS-mutation-testing-example)


Using [grunt-mutation-testing](https://www.npmjs.com/package/grunt-mutation-testing)

# Installation
* `git clone` this repo
* 

```
sudo npm install -g mocha
sudo npm install -g grunt-cli
npm install .
```

# Running

* Try a passing test:

```
mocha
```

* Run the mutation testing:

```
grunt
```
