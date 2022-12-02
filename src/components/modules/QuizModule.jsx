import React, { useState } from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";

const { TextArea } = Input;

import emojiGif from "../../assets/img/emoji.webp";
import { QUIZ_ATTRIBUTES } from "../../utilities/quiz";

const inital_state = {
 fullName: "",
 anonyme: false,
 getSickAndDiscover: "",
 when: "",
 experience: "",
 traitement: "",
 advise: "",
};

const data=[{"question":"Après une relation sexuelle non protégée, je peux directement faire un test de dépistage du VIH pour savoir si j’ai été infecté.e ?",
"arryResponse":["Vrai","Faux"]},
{"question":"Une gynécologue peut-il·elle faire un dépistage des IST ?",
"arryResponse":["Oui","Non"]},
{"question":"Je peux acheter des autotests de dépistage du VIH en pharmacie.",
"arryResponse":["Vrai","Faux"]},
{"question":"Combien de temps dois-je attendre mon résultat avec un autotest ?",
"arryResponse":["Quelques jours","Quelques minutes"]},
{"question":"Quel liquide corporel est analysé lors d’un test de dépistage du VIH ?",
"arryResponse":["Dans un centre de planning familial","A la pharmacie"]},
{"question":"Une goutte de sang suffit pour faire…",
"arryResponse":["Un dépistage du VIH par prise de sang","Un dépistage rapide du VIH(ou un autotest du VIH)"]},
{"question":"Que dois-je faire pour avoir un résultat de test du VIH 100% fiable ?",
"arryResponse":["Respecter le délai d’attente entre la prise de risque et le test","Passer au plus vite un test de dépistage du VIH après la prise de risque"]}
]

function QuizModule() {
 const [form] = Form.useForm();
 const [quiz, setQuiz] = useState(inital_state);
 const [move, setMove] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(1);
 const [isMoved, setIsMoved] = useState(false);

 const onFinish = async () => {
    setCurrentQuestion(setCurrentQuestion+1)
 };

 const handleMouseEnter = (e) => {
  let invalid = true;
  Object.values(quiz).forEach((element, index) => {
   if (!element && index > 1) {
    invalid = true;
    return;
   }
   invalid = false;
  });
  if (quiz.fullName || quiz.anonyme) {
   invalid = false;
  }
  if (quiz.getSickAndDiscover.length < 50 || quiz.traitement.length < 50 || quiz.experience.length < 50 || quiz.advise.length < 50) {
   invalid = true;
  }

  if (invalid) {
   setIsMoved((prev) => !prev);
   setMove(true);
  } else {
   setMove(false);
  }
 };

 const handleChange = (e) => {
  if (e.target.name == "anonyme") {
   setQuiz((prev) => ({
    ...prev,
    [e.target.name]: e.target.checked,
   }));
   return;
  }
  setQuiz((prev) => ({
   ...prev,
   [e.target.name]: e.target.value,
  }));
 };

 let buttonClass;
 let emojiClass = null;
 if (!isMoved) {
  buttonClass = "d-flex justify-content-end w-100";
  emojiClass = "d-flex justify-content-start ";
 } else {
  buttonClass = "d-flex justify-content-start w-100";
  emojiClass = "d-flex justify-content-end ";
 }

 const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
 return (
  <>
   <Form className="mt-4" form={form} name="basic" onSubmit={onFinish} autoComplete="on">
    {data.map((element,i)=>(
        i+1 == currentQuestion ? 
        <div>
        <label>{element.question}</label>
        <Form.Item
        name="experience"
        className="w-100"
        >
           { element.arryResponse.map((response)=>(
            
                <Checkbox onChange={onChange}>{response}</Checkbox>
            ))}
            
           
        </Form.Item>
        </div>
        :null
    ))}
   
  
    

    <Form.Item>
     <div className={buttonClass}>
      <Button type="primary" className="d-flex gap-2 align-items-center" htmlType="submit" onClick={() => onFinish()}>
       {move && (
        <div className={emojiClass}>
        </div>
       )}
       <span>Suivant</span>
      </Button>
     </div>
    </Form.Item>
    <div className="ps-fixed"></div>
   </Form>
  </>
 );
}
export default QuizModule;
