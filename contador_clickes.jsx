import {Fragment} from 'react';
import React,{ useState } from 'react';

/*fun��o do componente*/
function contar(){

/*useState serve para salvar e atualizar um valor*/

/*exemplos a baixo*/

const[contaclicke,setcontaclicke] = useState(0);


/*se cria uma vari�vel array(vetor) que retorna dois elementos,sendo o primeiro o valor atual do estado e outra que permite atualizar o estado */

const[isDarkMode, setIsDarkMode] = useState(false);

const handle= () => {

setcontaclicke(contaclicke + 1);

 


}


const dark= () => {

    setIsDarkMode(!isDarkMode);
    /* ! significa diferente,no caso diferente de falso*/
     
    
    
    };
/*na parte do dark mode foi usado um operador tern�rio afim de alterar o tema da p�gina */
    
    return(
        <>
<body className =  {isDarkMode ? 'dark_mode': ''}>

<div className ='numero'>

<h1>{contaclicke}</h1>

</div>

<div className ='contar'>
<button onClick = {handle}>contar</button>

</div>

<div className ='dark'>


<button onClick ={dark}>dark</button>

</div>



</body>




</>
    );
}

export default contar;
