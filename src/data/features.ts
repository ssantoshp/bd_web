export type TFeature = {
  id: number
  title: string
  description: string
  comingSoon: boolean
}

export const features: TFeature[] = [
  {
    id: 1,
    title: 'Easy to use',
    description:
      "Say goodbye to the endless struggle of navigating through countless files and folders to find that one picture",
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Smart Search',
    description:
      "Even if your description is vague, ByteDetective will deliver pretty decent results, giving you images that match your words.",
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Fast',
    description:
      'Lightning-fast performance as the inference is made with Rust and leverage Redis for caching.',
    comingSoon: false,
  }
]
