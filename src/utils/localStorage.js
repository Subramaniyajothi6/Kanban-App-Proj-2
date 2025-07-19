export const loadLocalStorage = () => {
    try{
        const data = localStorage.getItem('kanban-tasks');
        return data ? JSON.parse(data) :[];

    }
    catch(error){

        console.log("error in loading the data from local storage",error);
        return [];
    }
};

export const saveLocalStorage = (tasks) =>{
    try{
        localStorage.setItem('kanban-tasks',JSON.stringify(tasks));
   }

    catch(error){
        console.log("error in saving the data to local storage",error);

    }
};