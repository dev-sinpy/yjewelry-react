import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import useGlobalConfig from 'hooks/useGlobalConfig';
import fetcher from 'lib/fetcher';
import { useEffect } from 'react';
import useSWR from 'swr';

const CookiePopup = () => {
  const { isCookiePopupOpen, toggleCookiePopup } = useGlobalConfig();

  const { data: cookieAcceptanceStatus } = useSWR<{ status: boolean }>('/api/getCookieAcceptanceStatus', fetcher);

  useEffect(() => {
    if (cookieAcceptanceStatus && cookieAcceptanceStatus.status) {
      toggleCookiePopup(false);
    } else {
      toggleCookiePopup(true);
    }
  }, [cookieAcceptanceStatus, toggleCookiePopup]);

  const closeCookiePopup = () => {
    toggleCookiePopup(false);
  };

  return (
    <Dialog
      className="max-w-sm"
      open={isCookiePopupOpen}
      sx={{
        minWidth: '100vw',
      }}
      PaperProps={{
        sx: {
          border: '1px solid #BFD1E8',
          position: 'absolute',
          maxWidth: '350px',
          right: 0,
          bottom: 0,
        },
      }}
      onClose={closeCookiePopup}
      hideBackdrop
    >
      <IconButton
        aria-label="close"
        onClick={() => {
          closeCookiePopup();
        }}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>
        <Typography variant="apercu" className="text-sm">
          🍪 Everybody loves Cookies! 🍪
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="apercu" className="text-sm">
          Cookies help us deliver our services. By using our services, you agree to our use of cookies policy.
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeCookiePopup} variant="text" color="secondary">
          It&apos; OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookiePopup;
