import React, { Component } from 'react';

export const KEYDOWN = 'keydown';
export const KEYPRESS = 'keypress';
export const KEYUP = 'keyup';

export default WrappedComponent =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                [KEYDOWN]: [],
                [KEYPRESS]: [],
                [KEYUP]: [],
            };
        }

        componentDidMount() {
            window.addEventListener(KEYDOWN, this.handleKeyDown);
            window.addEventListener(KEYPRESS, this.handleKeyPress);
            window.addEventListener(KEYUP, this.handleKeyUp);
        }

        componentWillUnmount() {
            window.removeEventListener(KEYDOWN, this.handleKeyDown);
            window.removeEventListener(KEYPRESS, this.handleKeyPress);
            window.removeEventListener(KEYUP, this.handleKeyUp);
        }

        onKeyDown = listeners => {
            this.queueListeners(KEYDOWN, listeners);
        };

        onKeyPress = listeners => {
            this.queueListeners(KEYPRESS, listeners);
        };

        onKeyUp = listeners => {
            this.queueListeners(KEYUP, listeners);
        };

        getListenersForEmit = (eventType, keyCode) =>
            this.state[eventType].filter(listener => listener.keyCode === keyCode);

        removeKeyDown = listeners => {
            this.unqueueListeners(KEYDOWN, listeners);
        };

        removeKeyPress = listeners => {
            this.unqueueListeners(KEYPRESS, listeners);
        };

        removeKeyUp = listeners => {
            this.unqueueListeners(KEYUP, listeners);
        };

        queueListeners = (eventType, listeners) => {
            if (Array.isArray(listeners)) {
                listeners.forEach(listener => {
                    this.addListener(eventType, listener);
                });
            } else {
                this.addListener(eventType, listeners);
            }
        };

        unqueueListeners = (eventType, listeners) => {
            if (Array.isArray(listeners)) {
                listeners.forEach(listener => {
                    this.removeListener(eventType, listener);
                });
            } else {
                this.removeListener(eventType, listeners);
            }
        };

        addListener = (eventType, listener) => {
            this.setState(state => ({
                [eventType]: [...state[eventType], listener],
            }));
        };

        removeListener = (eventType, listener) => {
            this.setState(state => ({
                [eventType]: state[eventType].filter(
                    item => item.keyCode !== listener.keyCode && item.handler !== listener.handler
                ),
            }));
        };

        handleKeyDown = event => {
            const listeners = this.getListenersForEmit(KEYDOWN, event.keyCode);
            listeners.forEach(listener => {
                listener.handler(event);
            });
        };

        handleKeyPress = event => {
            const listeners = this.getListenersForEmit(KEYPRESS, event.keyCode);
            listeners.forEach(listener => {
                listener.handler(event);
            });
        };

        handleKeyUp = event => {
            const listeners = this.getListenersForEmit(KEYUP, event.keyCode);
            listeners.forEach(listener => {
                listener.handler(event);
            });
        };

        api = () => ({
            onKeyDown: this.onKeyDown,
            onKeyPress: this.onKeyPress,
            onKeyUp: this.onKeyUp,
            removeKeyDown: this.removeKeyDown,
            removeKeyPress: this.removeKeyPress,
            removeKeyUp: this.removeKeyUp,
        });

        render() {
            const api = this.api();
            return <WrappedComponent {...api} {...this.props} />;
        }
    };
