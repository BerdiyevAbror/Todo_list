const  input=document.querySelector('input')
const AddBtn=document.querySelector('.add')
const ContentList=document.querySelector('.content')

const CreateTodo=()=>{
    const Todo=input.value

    if(!Todo.length) return

   const li=document.createElement('li')
   const span=document.createElement('span')
   const RemoveBtn=document.createElement('button')

   li.classList.add('item')
   span.classList.add('text')
   RemoveBtn.classList.add('remove')

   span.innerText=Todo
   RemoveBtn.innerText='Remove'

   li.append(span)
   li.append(RemoveBtn)
   ContentList.append(li)


   input.value=''
   
}

AddBtn.addEventListener('click', CreateTodo)

ContentList.addEventListener('click', (e)=>{
    const target=e.target

    if (target.classList.contains('remove')) {
        target.parentElement.remove()
    }
})