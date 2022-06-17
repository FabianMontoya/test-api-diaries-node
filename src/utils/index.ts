import * as validators from './validators';
import * as cors from './cors';

export default { validators, cors }; // permite importar todos los modulos de una vez: import Utils from './utils';
export { validators, cors }; // permite importar de a un modulo con destructuring: import { validators } from './utils';
