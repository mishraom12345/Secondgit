var item = document.getElementById('sita')
    var annu = document.getElementById('pawan')
    let radha = document.getElementsByClassName('edit')
    item.addEventListener('click',additem)
    annu.addEventListener('click',removeItem)
    //radha.addEventListener('click',editItem)

    function additem(e){
        e.preventDefault();
        var name = document.getElementById('sbi').value
        var email = document.getElementById('cbi').value

        obj = {
            name:name , email:email
        }
        var ram = JSON.stringify(obj)
        localStorage.setItem(obj.email,ram)

   
        var unorganised = document.getElementById('pawan')
        let name1 = document.getElementById('sbi').value
        let emailId = document.getElementById('cbi').value
        
        //create list
        let lst = document.createElement('li')
        lst.id = 'abc'
        lst.className = 'asdf'

        lst.appendChild(document.createTextNode(name1+ ' '+emailId));
        unorganised.appendChild(lst)

        //create edit button
        let edit1 = document.createElement('button');
        edit1.className = 'edit'
        
        edit1.appendChild(document.createTextNode('edit'))
        lst.appendChild(edit1)

        //create delete button
        let deletebtn = document.createElement('button')
        deletebtn.className = 'delete'
        deletebtn.appendChild(document.createTextNode('delete'))
        lst.appendChild(deletebtn)    



    }

    function removeItem(e){

        if(e.target.classList.contains('delete')){

        let lst = e.target.parentElement;
        console.log(lst)
        annu.removeChild(lst)
        localStorage.removeItem(obj.email)

        }
         

    }

    // function editItem(e){
    //     if(e.target.classList.contains('edit')){
    //         let lst = e.target.parentElement;
    //         console.log(lst)
    //         annu.removeChild(lst)
                

    //         document.getElementById('sbi').value = e.target.parentElement.name

    //         document.getElementById('cbi').value = e.target.parentElement.email
            
    //     }
    // }

