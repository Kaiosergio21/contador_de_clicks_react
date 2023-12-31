import React from 'react';
import contar from './contador_clickes'/*esse componente esta sendo importado para o app;*/
import './contador_clickes.css';
/*O app é responsavel por fazer tudo funcionar*/

function App()/*função do app*/{


return (<div>{contar()}
           
</div>

);

}


export default App;