import app from './app';

app.listen(app.get('port'), () => {
    console.log(`App is Running on port ${app.get('port')}`);
});