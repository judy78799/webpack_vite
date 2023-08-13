import {hello, add } from './util';
import "./style.css";
import "./header.css";
import logo from "./images/pls_1.jpg";

const text = hello("<h1>일본 교토 여행 또 가고 싶다~!!!</h1>");
const num = add(1, 2);
const img = `<img src="${logo}" alt="비닐봉지" />`;

document.getElementById("root").innerHTML = img + text + num;