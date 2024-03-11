import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import firebase from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() {}

  register(user: { username: string, password: string }) {
    user.username = CryptoJS.AES.encrypt(user.password, user.username).toString();  
    
    const usersRef = firebase.database().ref('/users');
  
    return usersRef.orderByChild('username').equalTo(user.username).once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          throw new Error('O usuário já está cadastrado');
        } else {
          return usersRef.push(user);
        }
      });
  }

  login(credentials: {username: string, password: string}) {
    if(!credentials.username || !credentials.password) {
      throw new Error('Usuário e senha são obrigatórios');
    } else {
      credentials.username = CryptoJS.AES.encrypt(credentials.password, credentials.username).toString();  
      return firebase.database().ref('/users').orderByChild('username').equalTo(credentials.username).once('value')
        .then(snapshot => {
          if (snapshot.exists()) {
            localStorage.setItem('authToken', 'token');
          } else {
            throw new Error('Usuário ou senha inválidos');
          }
        });
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    alert('Usuário deslogado!');
  }

}