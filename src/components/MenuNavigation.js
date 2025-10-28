/*This component is used to create the main navigation menu.*/

const MenuNavigation = () => {

  /*The nav array contains the title of the page and the link is to the same page
    used on the original site. Some of the links have been shortened using a URL shortener 
    website.*/

const nav = [

  ["Groceries", "https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/gb/groceries?storeId=10151&langId=44&krypto=Er8rihy%2FxBK4CUWSRJ3KxxPB4%2FudYN840OGvbBaOScMlzQpkYy7twR1ChMcMxKhgBLn%2BC7QZ022Z88fVBAY46Y%2BJ8YcvB0quVKs%2FRUGc03BvOadLGEZ6UoMK5AurGcQd&ddkey=https%3Agb%2Fgroceries"],
  ["Food to order" , "shorturl.at/wR126"],
  ["Recipes" , "shorturl.at/vHJL8"],
  ["Bank", "shorturl.at/cozB4"],
  ["Tu", "shorturl.at/uFIN6"],
  ["Argos","shorturl.at/dmoy0"],
  ["Habitat", "shorturl.at/bdX67"],
  ["Energy","https://www.sainsburysenergy.com/?utm_medium=website&utm_source=sainsburys&utm_campaign=april2021_dropdownbanner"],
]


/*The nav array is mapped over to create a list with a link element inside.  */

const navMenu = nav.map((item,index)=>{
  return   <li key={index}><a href={item[1]} target="_blank" rel="noreferrer">{item[0]}</a></li>
 })

 /*The component returns the list.*/
    
  return (
    <div className="navBar">
      <ul className='navList'>
        {navMenu}
      </ul>
    </div>
  )
}

export default MenuNavigation