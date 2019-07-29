# NgxChat

Chat UI Component for Angular Applications

  [Live Demo](https://ngx-wachat-example.stackblitz.io)

  [Source Code](https://stackblitz.com/edit/ngx-wachat-example)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the chat.

```bash
npm install ngx-wachat --save
```

## Usage

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxWachatModule} from 'ngx-wachat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWachatModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

In Your HMTL
```html
<ngx-wachat [contacts]="contacts" [origin]="from" (sendMessage)="onSendMessage($event)"></ngx-wachat>
```


## Properties
| Property| Description | Type | Default
| --- | --- | --- | --- |
| `contacts` | Array of contacts | `ChatContact[]` | []
| `origin` | User origin of the message | `ChatContact` | null
| `placeholder` | Placeholder text of field that send's message | `string` | Say Hi
| `height` | Height of chat window | `string` | 400px
| `width` | Width of chat window | `string` | 350px
| `color` | Header color of chat window | `string` | #629ce4
| `emptyListDescription` | Text of label when list of contacts is empty | `string` | No Contacts Found

## Events
| Event | Description | value
| --- | --- | ---
| `sendMessage` | Emitted when user press enter on field to send message | ChatMessage

## Methods `ChatService`
| Method | Description | Parameter
| --- | --- | ---
| `loadMessages` | Method that (first) load messages to chat | ChatMessage[]
| `sendMessage` | Method that append message received from server | ChatMessage

## Interface `ChatContact`
| Property| Description | Type
| --- | --- | --- |
| `id` | Id of chat contact | `string or number`
| `name` | Name of chat user | `string`
| `description` | Sub text shown just below the name of chat user | `string`
| `status` | Status of chat user on chat | `ChatStatus`
| `avatar` | Path of avatar image | `string`

## Interface `ChatMessage`
| Property| Description | Type
| --- | --- | --- |
| `origin`| User chat, origin of the message | `ChatContact`
| `destination` | User chat, destination of the message | `ChatContact`
| `message` | The string message | `string`
| `date` | Date of message ( generated from server or not) | `Date`

## License
[MIT](https://choosealicense.com/licenses/mit/)
