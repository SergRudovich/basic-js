const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isNotreverse = true) {
    this.isNotreverse = isNotreverse;
   // let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   // let char = '';

    //encrypt table
    this.cube = [[]];
    this.cube[0] = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(",");
    this.cube[1] = 'B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A'.split(",");
    this.cube[2] = 'C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B'.split(",");
    this.cube[3] = 'D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C'.split(",");
    this.cube[4] = 'E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D'.split(",");
    this.cube[5] = 'F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E'.split(",");
    this.cube[6] = 'G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F'.split(",");
    this.cube[7] = 'H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G'.split(",");
    this.cube[8] = 'I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H'.split(",");
    this.cube[9] = 'J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I'.split(",");
    this.cube[10] = 'K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J'.split(",");
    this.cube[11] = 'L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K'.split(",");
    this.cube[12] = 'M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L'.split(",");
    this.cube[13] = 'N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M'.split(",");
    this.cube[14] = 'O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N'.split(",");
    this.cube[15] = 'P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O'.split(",");
    this.cube[16] = 'Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P'.split(",");
    this.cube[17] = 'R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q'.split(",");
    this.cube[18] = 'S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R'.split(",");
    this.cube[19] = 'T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S'.split(",");
    this.cube[20] = 'U,V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T'.split(",");
    this.cube[21] = 'V,W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U'.split(",");
    this.cube[22] = 'W,X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V'.split(",");
    this.cube[23] = 'X,Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W'.split(",");
    this.cube[24] = 'Y,Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X'.split(",");
    this.cube[25] = 'Z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y'.split(",");
    //  document.write('<br>',en);
    // for (let j=1; j<26; j++){
    //	  char = en.shift();
    //     en.push(char);
    //   this.cube[j].push(en);
    //     document.write('<br>',en);
    //  }
    this.re = new RegExp('[A-Z]');
    this.encryptedMessag = '';
    this.decryptedMessag = '';
  }



  encrypt(message, key) {


    //dublicate key to messege length
    key = key.repeat(Math.floor(message.length / key.length) + 1).slice(0, message.length);
    message = message.toUpperCase();
    key = key.toUpperCase();

    //encrypt
    this.encryptedMessag = '';
    let pos = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.re.test(message[i])) {
        this.encryptedMessag += this.cube[key.charCodeAt(pos) - 65][message.charCodeAt(i) - 65];
        pos++;
      } else {
        this.encryptedMessag += message[i];
      }
    }

    if (this.isNotreverse) {
      return this.encryptedMessag;
    } else {
      return this.encryptedMessag.split('').reverse().join('');
    }
  }

  decrypt(message, key) {

    this.decryptedMessage = '';
    //dublicate key to messege length
    key = key.repeat(Math.floor(message.length / key.length) + 1).slice(0, message.length);
    message = message.toUpperCase();
    key = key.toUpperCase();

    let pos = 0;
    this.decryptedMessag = '';
    for (let i = 0; i < message.length; i++) {
      if (this.re.test(message[i])) {
        for (let j = 0; j < 26; j++) {
          if (this.cube[j][key.charCodeAt(pos) - 65] === message[i]) this.decryptedMessage += String.fromCharCode(j + 65);
        }
        pos++;
      } else {
        this.decryptedMessage += message[i];
      }
    }

    if (this.isNotreverse) {
      if (this.decryptedMessage.startsWith(undefined)) this.decryptedMessage = this.decryptedMessage.slice(9);
      return this.decryptedMessage;
    } else {
      return this.decryptedMessage.split('').reverse().join('');
    }
  }


  // encrypt() {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // }    
  // decrypt() {
  //  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //  }
}

module.exports = VigenereCipheringMachine;
