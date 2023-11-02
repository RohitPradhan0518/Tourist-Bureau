document.addEventListener("DOMContentLoaded", ()=>{
   
   
    function select(id, list){
        const e = document.createElement("select");
        e.id = id;

        const defaultOption = document.createElement("option")


        for(let i = 0; i <list.length; i++){
            const o = document.createElement("option");
            o.innerText = list[i];
            e.appendChild(o);
        }
        return e;
    }

    
    document.body.appendChild(select("cateregories",  categories));
})