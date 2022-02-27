function initBot(){//Inicia a primeira conversa com o bot

    var bot = document.getElementById("main");

    if(bot.className === "main"){
        bot.className = "main1";
        initChat();
    }else{
        bot.className = "main";
        eraseChat();
    }

}

function initChat(){//Cria os elementos que compoem a conversa

    var content = document.getElementById("content");

    var p = document.createElement("p");
    var img = document.createElement("img");
    var div = document.createElement("div");
    var btn = document.createElement("button");
    var btn2 = document.createElement("button");


    div.className = "chatContainer";
    div.id = "chatDiv"
    img.src = "img/Euzin.png";
    img.className = "chatIMG";
    p.textContent = "Olá, como posso ajudar? 🤓";
    btn.textContent = "📞 Quero falar com um atendente";
    btn2.textContent = "Nada não";

    btn.setAttribute("onclick","callEmployer()");
    btn2.setAttribute("onclick", "end()");

    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(btn);
    div.appendChild(btn2);

    var div2 = document.getElementById("chatDiv-2");
    div2.remove();
}

function callEmployer(){//Função para enviar ao usuário um contato para atendente
    if(document.getElementById("chatDiv-2") == null){//Verifica se já existe o elemento
        var content = document.getElementById("content");

        var p = document.createElement("p");
        var img = document.createElement("img");
        var div = document.createElement("div");
    
        div.className = "chatContainer-2";
        div.id = "chatDiv-2"
        img.src = "img/Euzin.png";
        img.className = "chatIMG";
        p.textContent = "Para falar com um atendente ligue para: 📞4002-8299 ou 📞XXXX-XXXX.";
    
    
        content.appendChild(div);
        div.appendChild(img);
        div.appendChild(p);
    }else{//Apaga a última conversa
        var div2 = document.getElementById("chatDiv-2");
        div2.remove();
        callEmployer();
    }

    

    
}


function end(){//Encerrar a conversa

    if(document.getElementById("chatDiv-2") == null){//Verifica se já existe o elemento
        var content = document.getElementById("content");

        var p = document.createElement("p");
        var img = document.createElement("img");
        var div = document.createElement("div");
    
        div.className = "chatContainer-2";
        div.id = "chatDiv-2"
        img.src = "img/Euzin.png";
        img.className = "chatIMG";
        p.textContent = "Tudo bem, caso necessite de alguma ajuda estou aqui! 😉."
    
        content.appendChild(div);
        div.appendChild(img);
        div.appendChild(p);
    }else{//Apaga a última conversa
        var div2 = document.getElementById("chatDiv-2");
        div2.remove();
        end();
    }


    

}

function eraseChat(){//Remove os elementos, "desligar o bot"
    var div = document.getElementById("chatDiv");
    var div2 = document.getElementById("chatDiv-2");

    div.remove();
    div2.remove();

}

