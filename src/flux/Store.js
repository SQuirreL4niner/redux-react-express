export class Store {
  constructor(dispatcher){
    this.__listeners = []
    this.__state = this.getInitialState()
    dispatcher.register(this.__onDispatch.bind(this))
  }

  __onDispatch(){
    throw new Error('Subclasses must override __onDispatch mehtod of a flux store')
  }

  getInitialState(){
    throw new Error('Subclasses must override getInitialState mehtod of a flux store')
  }

  addListener(listener){
    this.__listeners.push(listener)
  }

  __emitChange(){
    this.__listeners.forEach(listener=>listener(this.__state))
  }
}
