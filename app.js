var item = document.getElementById('sita')
    var annu = document.getElementById('pawan')
    
    item.addEventListener('click',additem)
    

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

        lst.appendChild(document.createTextNode(name1+''+emailId))
        unorganised.appendChild(li)

        


    }

    
