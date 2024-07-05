import { useEffect } from 'react';
import $ from 'jquery';
import '../../../public/js/base/helpers.js';
import '../../../public/js/base/globals.js';
import '../../../public/js/base/nav.js';
import '../../../public/js/base/search.js';
import '../../../public/js/base/settings.js';
import '../../../public/js/common.js';
import '../../../public/js/scripts.js';

const ScriptLoader = () => {
  useEffect(() => {
    // Inicializar cualquier plugin que necesite jQuery o similar
    $(document).ready(() => {
      // Tu código de inicialización aquí
    });
  }, []);

  return null;
};

export default ScriptLoader;