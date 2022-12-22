let estudio = "100 minutos de estudio.";
let tp = "100 minutos de hacer trabajos Practicos.";
let homework = "30 minutos de cosas de la casa.";
let trabajo = "240 minutos de Trabajo.";
let descanso = "10 minutos de descanso.";

    console.log("TAREAS");
    for(let i= 0; i < 14;i++){
        if(i == 0){
            console.group("Semana 1");
        }
        console.group("dia "+(i + 1));
        console.log(trabajo);
        console.log(descanso);
        console.log(tp);
        console.log(estudio);
        console.log(homework);
        if(i == 7){
            console.groupEnd();
            console.group("Semana 2");
        }
    }
    console.groupEnd();
    console.groupEnd();
