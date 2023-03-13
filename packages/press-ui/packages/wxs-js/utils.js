import bem, { bem2 } from './bem';
import memoize from './memoize';
import addUnit from './add-unit';


const memoizeBem = memoize(bem);

export default {
  bem: memoizeBem,
  memoize,
  addUnit,
  bem2,
};
