import { Links } from "./Links"

export interface Photo {
  'id': string,
  'created_at': string,
  'updated_at': string,
  'width': number,
  'height': number,
  'color': '#60544D',
  'blur_hash': string,
  'likes': 12,
  'views': number,
  downloads: number,
  'liked_by_user': false,
  'description': string,
  'alt_description': string,
  'user': {
    'id': string,
    'username': string,
    'name': string,
    'portfolio_url': string,
    'bio': string,
    'location': string,
    'total_likes': number,
    'total_photos': number,
    'total_collections': number,
    'instagram_username': string,
    'twitter_username': string,
    'profile_image': {
      'small': string,
      'medium': string,
      'large': string
    },
    'links': {
      'self': string,
      'html': string,
      'photos': string,
      'likes': string,
      'portfolio': string
    },
  },
  'links': Links,
  'urls': {
    'raw': string,
    'full': string,
    'regular': string,
    'small': string,
    'thumb': string,
  },
  'tags': [
    { 'title': 'man' },
    { 'title': 'drinking' },
    { 'title': 'coffee' },
  ],
}