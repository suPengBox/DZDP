"use strict"

const BASEURL="http://localhost:3000"

const DISCUSS=`${BASEURL}/MainHeader/getMineHeader`;
const MYLIKE=`${BASEURL}/MainLike/GetMinelike`;
const FINDMORE=`${BASEURL}/FindMore/GetFindMore`;
const MINENAV=`${BASEURL}/MainNav/GetMainNav`;
module.exports = {
    DISCUSS,
    MYLIKE,
    FINDMORE,
    MINENAV
}
