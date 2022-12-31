window.onload = () => {

    document.querySelector('#excusa').innerHTML = generateExcuse();
    console.log("Hola Cristian"+ generateExcuse);
    };
    
    let generateExcuse = () => {
        let pronoun = ["A","The"];
        let subject = ["jogger","racoon","dog","driver","comedian","pincone"];
        let action = ["took my","threw my","yelled at my","stole my","bit my"];
        let possetion = ["homework","toe","car","shoe"];
        let where = ["on the street","in my house","in my driveway"];
    
        let proIndx = Math.floor(Math.random()* pronoun.length)
        let subjIndx = Math.floor(Math.random()* subject.length)
        let actIndx = Math.floor(Math.random()* action.length)
        let possIndx = Math.floor(Math.random()* possetion.length)
        let wheIndex = Math.floor(Math.random()* where.length)
    
    return pronoun[proIndx]+" "+subject[subjIndx]+" "+action[actIndx]+" "+possetion[possIndx]+" "+where[wheIndex];
    
    }