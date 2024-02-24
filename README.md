# Message-next


`message-next` is a TypeScript library that provides convenient methods for displaying alert messages using SweetAlert2.

<strong>Installation</strong>

You can install `message-next` via npm:

```
  npm install message-next
```

<strong>Usage</strong>

Import `message-next` in your TypeScript file:

```
import {
  confirmationDeleteReturn,
  success,
  error,
  info,
  confirmationReturn,
} from 'message-next';

```

<strong>confirmationDeleteReturn</strong>
Displays a confirmation dialog for delete actions.

```
const deleteConfirmed = await confirmationDeleteReturn('Exclusão', 'Deseja excluir este registro?');
if (!deleteConfirmed) {
  return false;
} 
```

<strong>success</strong>
Displays a success message.

```
success('Operação realizada com sucesso');
```

<strong>error</strong>
Displays an error message.

```
error('Ocorreu um erro ao realizar a operação');
```
<strong>info</strong>
Displays an information message.

```
info('Este é um aviso informativo');
```

<strong>confirmationReturn</strong>
Displays a generic confirmation dialog.

```
const confirmed = await confirmationReturn('Confirmação', 'Tem certeza?');
if (confirmed) {
  // Proceed with the action
} else {
  // Cancelled action
}

```

## API

`confirmationDeleteReturn`(title?: string, msg?: string): Promise<boolean>
title (optional): Title for the confirmation dialog (default: 'Exclusão').
msg (optional): Message for the confirmation dialog (default: 'Deseja excluir este registro?').
Returns a promise that resolves to true if the user confirms, false if cancelled.
success(msg: string, title?: string): void
msg: Success message to display.
title (optional): Title for the success alert (default: 'Sucesso').
error(msg: string, title?: string): void
msg: Error message to display.
title (optional): Title for the error alert (default: 'Erro').
info(msg: string, title?: string): void
msg: Information message to display.
title (optional): Title for the info alert (default: 'Aviso').
confirmationReturn(title?: string, msg?: string): Promise<boolean>
title (optional): Title for the confirmation dialog (default: '').
msg (optional): Message for the confirmation dialog (default: '').
Returns a promise that resolves to true if the user confirms, false if cancelled.

## Dependencies

`SweetAlert2` is used for displaying the alert dialogs.