import { SCRIPTS } from './constants';

/**
 * ScriptUtils
 */
class ScriptUtil {
  private scripts: TScript & any = {};

  constructor() {
    SCRIPTS.forEach((script: any) => {
      this.scripts[script.id] = {
        loaded: false,
        src: script.src,
      };
    });
  }

  // load a single or multiple scripts
  async load(...scripts: Array<string>) {
    const promises: Array<any> = [];
    // push the returned promise of each loadScript call
    scripts.forEach(script => promises.push(this.loadScript(script)));
    // return promise.all that resolves when all promises are resolved
    return await Promise.all(promises);
  }

  // load the script
  loadScript(id: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[id]) {
        // script not defined
        resolve({ script: id, loaded: true, status: 'Script not defined' });
      } else if (this.scripts[id].loaded) {
        // resolve if already loaded
        resolve({ script: id, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const script = document.createElement('script') as any;
        script.id = id;
        script.type = 'text/javascript';
        script.src = this.scripts[id].src;
        // cross browser handling of onLoaded event
        if (script.readyState) {
          // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[id].loaded = true;
              resolve({ script: id, loaded: true, status: 'Loaded' });
            }
          };
        } else {
          // Others
          script.onload = () => {
            this.scripts[id].loaded = true;
            resolve({ script: id, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: id, loaded: false, status: 'Loaded' });
        // finally append the script tag in the DOM
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

  // remove a single or multiple scripts
  remove(...scripts: Array<string>) {
    const promises: Array<any> = [];
    // push the returned promise of each loadScript call
    scripts.forEach(script => promises.push(this.removeScript(script)));
    // return promise.all that resolves when all promises are resolved
    return Promise.all(promises);
  }

  removeScript(id: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[id]) {
        // script not defined
        resolve({ script: id, loaded: true, status: 'Script not defined' });
      } else if (!this.scripts[id].loaded) {
        resolve({ script: id, loaded: true, status: 'Already not loaded' });
      } else {
        const scriptEl = document.getElementById(id) as any;
        scriptEl.parentNode?.removeChild(scriptEl);
        this.scripts[id].loaded = false;
        resolve({ script: id, loaded: true, status: 'Script removed' });
      }
    });
  }
}

type TScript = {
  [key: string]: any;
};

export { ScriptUtil };
