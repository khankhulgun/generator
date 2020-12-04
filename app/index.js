'use strict';

const path = require('path');
const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');
function getKey(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
module.exports = class extends Generator {

    paths() {
        this.destinationRoot('./');
    }

    prompting() {

        console.log('\n' +
            '+-----------------------------------+\n' +
            '|   Khan Khulgun  G e n e r a t o r |\n' +
            '+-----------------------------------+\n' +
            '\n');

        let cb = this.async();

        let prompts = [{
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            default: 'example'
        },{
            type: 'input',
            name: 'serviceName',
            message: 'What is the name of your service provider?',
            default: 'exampleService'
        }];

        return this.prompt(prompts).then(props => {
            this.projectName = props.projectName.replace(/\s+/g, '-').toLowerCase();
            this.serviceName = props.serviceName.replace(/\s+/g, '-').toLowerCase();
            this.secretKey = getKey(34)

            cb()
        });

    }

    writing() {
        console.log("Creating project folders");

        let srcDir = this.destinationPath(path.join('', this.projectName));
        let serviceDir = this.destinationPath(path.join(this.projectName, this.serviceName));
        let projectPublicDir = srcDir+"/public/"+this.projectName;
        let initDir = srcDir+"/init";



        mkdir.sync(srcDir);
        mkdir.sync(projectPublicDir);
        mkdir.sync(serviceDir);
        mkdir.sync(initDir);


        this.fs.copy(
            this.templatePath('_gitignore'),
            path.join(srcDir, '.gitignore')
        );
        this.fs.copy(
            this.templatePath('README.md'),
            path.join(srcDir, 'README.md')
        );

        this.fs.copy(
            this.templatePath('logo.png'),
            path.join(projectPublicDir, 'logo.png')
        );

        this.fs.copy(
            this.templatePath('init'),
            path.join(srcDir, 'init')
        );
        this.fs.copy(
            this.templatePath('server_config'),
            path.join(srcDir, 'server_config')
        );
        this.fs.copy(
            this.templatePath('public'),
            path.join(srcDir, 'public')
        );


        let tmplContext = {
            projectName: this.projectName,
            serviceName: this.serviceName,
            secretKey: this.secretKey,
        };
        this.fs.copyTpl(
            this.templatePath('lambda.json'),
            path.join(srcDir, 'lambda.json'),
            tmplContext
        );

        this.fs.copyTpl(
            this.templatePath('config.toml'),
            path.join(srcDir, 'config.toml'),
            tmplContext
        );

        this.fs.copyTpl(
            this.templatePath('main.go'),
            path.join(srcDir, 'main.go'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('go.mod'),
            path.join(srcDir, 'go.mod'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('runner.conf'),
            path.join(srcDir, 'runner.conf'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('start.sh'),
            path.join(srcDir, 'start.sh'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('init/init.go'),
            path.join(initDir, 'init.go'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('exampleService/service.go'),
            path.join(serviceDir, 'service.go'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('exampleService/handlers'),
            path.join(serviceDir, 'handlers'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('exampleService/models'),
            path.join(serviceDir, 'models'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('exampleService/routes'),
            path.join(serviceDir, 'routes'),
            tmplContext
        );
        this.fs.copyTpl(
            this.templatePath('exampleService/templates'),
            path.join(serviceDir, 'templates'),
            tmplContext
        );


    }
};
