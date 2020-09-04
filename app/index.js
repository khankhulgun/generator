'use strict';

const path = require('path');
const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');

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
        }];

        return this.prompt(prompts).then(props => {
            this.projectName = props.projectName.replace(/\s+/g, '-').toLowerCase();


            cb()
        });

    }

    writing() {
        console.log("Creating project folders");

        let srcDir = this.destinationPath(path.join('', this.projectName));



        mkdir.sync(srcDir);


        this.fs.copy(
            this.templatePath('_gitignore'),
            path.join(srcDir, '.gitignore')
        );
        this.fs.copy(
            this.templatePath('README.md'),
            path.join(srcDir, 'README.md')
        );
        this.fs.copy(
            this.templatePath('config.toml'),
            path.join(srcDir, 'config.toml')
        );
        this.fs.copy(
            this.templatePath('lambda.json'),
            path.join(srcDir, 'lambda.json')
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
        };

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


    }
};
