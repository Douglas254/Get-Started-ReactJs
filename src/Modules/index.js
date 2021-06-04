import Teacher, { promote } from "./teacher";
import React, { Component } from 'react';
// Named and Default exports 
// Default -> import ... from ''; e.g React
// Named -> import {...} from ''; e.g Component

const teacher = new Teacher("Dougla","BSc");
teacher.teach();