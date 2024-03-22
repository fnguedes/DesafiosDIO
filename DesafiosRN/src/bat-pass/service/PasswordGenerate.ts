export default function generate(){
  let password:string = ''
  let characteres:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*'

  for(let index=0;index<8;index++){
    password+=characteres.charAt(Math.floor(Math.random()* characteres.length))
  }
  return password
}