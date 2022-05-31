import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/playlists', (request: Request, response: Response) => {
   const playlists = users.map((user) => user.playlists).flat(1);

   response.status(210).send(playlists);
});

app.get('/tracks', (request: Request, response: Response) => {
   const IDPlaylist = request.body.id;

   if (!IDPlaylist) {
      response.status(400).send('O id da playlist é obrigatorio');
   }

   const playlists = users.map((user) => user.playlists).flat(1);

   let tracks;
   playlists.forEach((playlist) => {
      if (playlist.id === IDPlaylist) {
         tracks = playlist.tracks;
      }
   });
   response.send(tracks);
});

app.delete('/playlist', (request: Request, response: Response) => {
   const IDPlaylist = request.query.id;

   users.forEach((user) => {
      user.playlists = user.playlists.map((playlist: any) => {
         if (playlist.id === IDPlaylist) {
            return {};
         }
         return playlist;
      });
   });
   response.status(200).send(users);
});

app.delete('/track', (request: Request, response: Response) => {
   const trackId = request.query.id1;
   const playlistId = request.query.id2;

   const allPlaylists = users
      .map((user: any) => {
         return user.playlists;
      })
      .flat(1);

   allPlaylists.forEach((playlist: any) => {
      if (playlist.id === playlistId) {
         playlist.tracks = playlist.tracks.map((track: any) => {
            if (track.id === trackId) {
               return {};
            }

            return track;
         });
      }
   });

   response.status(200).send(allPlaylists);
});

app.listen(3003, () => console.log('Server rodando.....'));
