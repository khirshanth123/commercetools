import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './gallery';

const thumbnails = [
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDIwMDh8aW1hZ2Uvd2VicHxjSEp2WkhWamRDMXBiV0ZuWlhNdmFHVTFMMmhtWlM4NE56azJNalV4T1RRM01ETTRMbmRsWW5BfGM0ZTQ0NjY4YTc5ZjQyNWNkMDFkYmZiMjEyODFjNDNiZTdkOWQxNjI3YTlhY2NkYzIzZjVhZDU1MGU0OWZjNTk',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 0,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE0MTg0fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhR1F4TDJnd05pODROemsyTWpVeU1qYzBOekU0TG5kbFluQXwwZDM3MGI4OWU2ZDZlN2M4OGVjMWJiZDQ1MmVkZTZlYWExYjY2ZDg1YmZjMGNlYTY3NjZjNDM4YThkNTAxZmIw',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 1,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDc2MDkwfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhR00wTDJobFppODROemsyTWpVeU5qQXlNems0TG5kbFluQXw4YTU5MDliNjY3ZDJlN2I3OTJkNThkMzEyYTEyMWViZTVhOTA4MDNhNjYyYTdmNmY2YWIyYmJmYzc5YzA0MWM1',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 2,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE4OTA4fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRFZtTDJoaU15ODROemsyTWpVeU9UTXdNRGM0TG5kbFluQXw5ZjQxNDFjMWZhNDI3YjRmNWQ4NmJhYTM2M2EyNjFhYzhmODc2YTg3NzMwMDhkNGYzMzc4NGYzMTA2MzMzODEz',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 3,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE3MjE0fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhREkwTDJnNVlTODROemsyTWpVek1qVTNOelU0TG5kbFluQXxiNDFkMTNkMzI0MmNkNTVkNWJmZTUyMTBlZWQ0NDVmNmY2MTM0MDJlYTZmZjYwOGY1MWE3Mzk3Mzc0NWMyOTQ3',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 4,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE1MTEwfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhREF3TDJobU55ODROemsyTWpVek5UZzFORE00TG5kbFluQXw0M2JhNGE5MDQyMzNlMDA0Nzc4ZThkZmFhMmJlNzcwZjk2OWYwN2EwOWRjMTg0NjZmYjU4OGIzMTU2YTUxMzU5',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 5,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE3ODc0fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhREpsTDJoak1DODROemsyTWpVek9URXpNVEU0TG5kbFluQXw2MzFhOGVmYjIyMmIxMzNjMTU1MDk4ZDQ2Y2U4ZGUwNmM4OTJhMGQyOGRlZjUzNDllZjU1MjhhODMxOTFhMDQ5',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 6,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDMxMTcyfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhR1JtTDJobE55ODROemsyTWpVME1qUXdOems0TG5kbFluQXxhZTA3YzZmOWY4YTUxNTc5ZmQzMDAyODI3NDBlMjM0OTU5M2NiYzk2MjFkYTNjMzQxNTVkZjVmZTUzNWVmYjRi',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 7,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI1NTA4fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhREE1TDJnMk9DODROemsyTWpVME5UWTRORGM0TG5kbFluQXw0MWVlOWRjYTVkY2IyMTUxNDk1ZTZmNjFlYzQzMzZjYzhmMTlmZGUxMjg4NDhlYWJlY2Q4ZGNiNTgzNjhlMTFm',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 8,
  },
  {
    imageType: 'GALLERY',
    format: 'thumbnail',
    url: 'https://sapcommerce.test4echo.xyz//medias/96Wx96H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI1Mzc2fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhREpqTDJnd1lpODROemsyTWpVME9EazJNVFU0TG5kbFluQXwzMWM2ZDA1ZDFiNDE0ZDYwZDEwZDhhYWJlM2M4M2MxZDBiMDIwZDFkN2ZmMTViM2JkNDFkODZjZjU1NWEzMmIx',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 9,
  },
];
const galleryImages = [
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE5MTEyfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhR1ZsTDJnMU1DODROemsyTWpVeE9ERTFPVFkyTG5kbFluQXw2MGE4YWFhOGQxYThkODdkMzY3NjM3ODcwMmJiZGM1MDYyMGNjNjJmY2FiYzI3MzdmNzA1MDM3YzRmZTgyNTIw',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 0,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI4MzEyfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRGsyTDJnMk1TODROemsyTWpVeU1UUXpOalEyTG5kbFluQXxiY2ViY2E5NzU5NDNkYzlkMDkxZmY5NGFlYTRkYWU1ZTViYjZjNGE2NzkwOWIxYjBmZjkxNzNkMTIyZDA1MTgz',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 1,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDg4NDUyfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhR0k1TDJnd05DODROemsyTWpVeU5EY3hNekkyTG5kbFluQXw3MzAyNGM1YjFiNDBlNGYwODY3OTBjNjQyZTY3Yzk2YzUyMTYzYjM3MjI5MjQyMmUyNjg5OTI5ZjY5M2U1YmJk',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 2,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDM2MTA2fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRFZrTDJoaFlpODROemsyTWpVeU56azVNREEyTG5kbFluQXw4ZTEwZTgzMGQ0MzcwYjE2Mjc0ODc4NWFkOTNmN2QyYTMzMzgzZTkxYjJkY2I2MTcwYjdjNmM3MTg5NjUwMzVi',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 3,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDQwNDc2fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRFZtTDJnelppODROemsyTWpVek1USTJOamcyTG5kbFluQXw0MGUzMDZlNzAzNmFiNjJhMjM2OTJmM2RmOTI0MjU3YzVlMThlYjBlOTg3YzNlNjZiMGZlYWFiNjlhYTAxNTU4',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 4,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI4MDU0fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRE5qTDJnNVl5ODROemsyTWpVek5EVTBNelkyTG5kbFluQXxmYTlhMGVkNDFmMzI5Y2ZkNGE3NDdhODQxMTVmNTQyYWRkYzU0NGQ4OGQzZTEzOTRhMTQxZWIzYWFmYmY0NjRm',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 5,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDQ1MzA2fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhREU1TDJobU9TODROemsyTWpVek56Z3lNRFEyTG5kbFluQXw3Njg0MGJhNjg0OGI3ODNiMzViOGQ1N2E0NzNmMTM3ZWNlNjg0NTM1MWFmZDA0OTEyZmQ4YTcwY2YxNDZhYzkw',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 6,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDUxMzI2fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRGhtTDJnek1pODROemsyTWpVME1UQTVOekkyTG5kbFluQXxmZWNlN2ZmMmE3NzY4MGFmNGFhZWExMzI5YTM1ODRhZTBjMWM2NWU5MTNiNjgwNTQ3YWE3ZTk4YjkwMjg1MzE5',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 7,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDc0MDU2fGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhRFpqTDJnNFppODROemsyTWpVME5ETTNOREEyTG5kbFluQXxiODI0MWZiZTY0NjMwZWQyNDMyYmQwODZjY2NhMmE5ZjljNzI5ZThjMzI5MWMxMGZiOTFiYjgzMDkyMzJhYWVi',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 8,
  },
  {
    imageType: 'GALLERY',
    format: 'zoom',
    url: 'https://sapcommerce.test4echo.xyz//medias/515Wx515H-null?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDgxNzAyfGltYWdlL3dlYnB8Y0hKdlpIVmpkQzFwYldGblpYTXZhR1l3TDJnMk5TODROemsyTWpVME56WTFNRGcyTG5kbFluQXxhOGY2NDcwYmY2NzJmMjU4NjNiMDIwNTdhZjk2YjA0NDUwZmRiNWJkYmM2NjUzZmVhMjEyYzIxZWM3ZmVhZDQw',
    altText: 'Electric Single-Bevel Compound Miter Sa',
    galleryIndex: 9,
  },
];

export default {
  title: 'Components/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  argTypes: {
    thumbnails: { table: { disable: true } },
    images: { table: { disable: true } },
  },
  render: () => (
    <div className='w-full md:w-9/12 m-auto'>
      <Gallery thumbnails={thumbnails} images={galleryImages} />
    </div>
  ),
} satisfies Meta<typeof Gallery>;

type Story = StoryObj<typeof Gallery>;
