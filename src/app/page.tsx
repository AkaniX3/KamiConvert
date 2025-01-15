// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 bg-gradient-to-b from-gray-700 via-gray-900 to-gray-900 bg-[length:100%_50%] bg-no-repeat space-y-16 pb-8 pt-32 min-h-screen lg:pt-36 2xl:pt-44 w-full">
        <div className="space-y-12">
          <h1 className="text-3xl md:text-5xl font-medium text-center">
            Convert Media with <span className="font-bold text-teal-200">Kami</span>
            <span className="font-bold text-yellow-200">Convert</span>
          </h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Transform your content with KamiConvert! This free online tool lets you easily convert images, audio, and videos without limits.
              </p>
          </div>

          <Dropzone />
      </div>
    </>
  );
}
