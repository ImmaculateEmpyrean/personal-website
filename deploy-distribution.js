const fs = require('fs')
const path = require('path')
const {NodeSSH} = require('node-ssh')

const ssh = new NodeSSH()

async function main(){
    console.log('uploading files to server using ssh');

    await ssh.connect({
        host: '192.168.1.120',
        username: 'pi',
        privateKey: 'C:/Users/empyrean/.ssh/id_rsa_web_server'
    });

    try{
        await ssh.execCommand('rm -rf personal-website',{
            cwd: '/home/pi'
        });
        await ssh.execCommand('mkdir personal-website',{
            cwd: '/home/pi'
        });
        
        await ssh.putDirectory(path.resolve(__dirname,'dist/'),'/home/pi/personal-website/',{
            recursive: true,
            concurrency: 10,
        });

        console.log('finished uploading files to the server using ssh');
        console.log('started installing packages that are required for the server to run')

        await ssh.execCommand('npm install',{
            cwd: '/home/pi/personal-website'
        });

        ssh.dispose();

        console.log('finished installing packages that are required for the server to run');
    }
    catch(error){
        console.log(error);
    }
}


main();


