import LangIcon from "./LangIcon";

function Languages(){


    return(
        <div className="logoArea">
    
    <h3>Knowledge in the following programming languages and frameworks:</h3>
    <div className="logos">
<LangIcon img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="128px" name="JavaScript"/>
<LangIcon img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="128px" name="Python"/>
<LangIcon img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width="128px" name="C++"/>
<LangIcon img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="128px" name="ReactJS"/>
<LangIcon img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width="128px" name="MySQL"/>
<LangIcon img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="128px" name="PHP"/>


        </div>
        </div>
    )
}

export default Languages;