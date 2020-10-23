
import React,{ Component }  from 'react'
import { useNavigate ,withRouter } from 'react-router-dom'
import { useEffect } from 'react';

export default ({ history })=> {
    const navigate = useNavigate();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

