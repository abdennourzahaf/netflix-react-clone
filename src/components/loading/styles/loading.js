import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 999;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @-ms-keyframes spin {
    from {
      -ms-transform: translate(-50%, -50%), rotate(0deg);
    }
    to {
      -ms-transform: translate(-50%, -50%), rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: translate(-50%, -50%), rotate(0deg);
    }
    to {
      -moz-transform: translate(-50%, -50%), rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: translate(-50%, -50%), rotate(0deg);
    }
    to {
      -webkit-transform: translate(-50%, -50%), rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
`;
