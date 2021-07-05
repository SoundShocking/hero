import vars from '../_vars';
import Inputmask from 'inputmask';

Inputmask({ "mask": "+38 (099) 999-99-99" }).mask(vars.$inputTypeTel, {
  clearMaskOnLostFocus: true
});